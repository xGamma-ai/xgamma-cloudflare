export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);

    // 1. Get the original static index.html
    const response = await next();

    // 2. Determine what the title/desc should be based on the URL
    // You can fetch this from an API, or use a switch statement
    let customTitle = "Default Title";
    let customDescription = "Default Description";

    if (url.pathname.includes("article/google-auth-the-kmp-way")) {
        customTitle = "Google Sign-in: The KMP Way";
        customDescription = "Learn how to integrate Google Sign-in...";
    }

    // 3. Rewrite the HTML on the fly
    return new HTMLRewriter()
        .on("title", {
            element(element) {
                element.setInnerContent(customTitle);
            },
        })
        .on('meta[name="description"]', {
            element(element) {
                element.setAttribute("content", customDescription);
            },
        })
        .on('meta[property="og:title"]', {
            element(element) {
                element.setAttribute("content", customTitle);
            },
        })
        .transform(response);
}