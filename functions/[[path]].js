export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);

    // 1. Get the original static index.html
    const response = await next();

    // 2. Determine what the title/desc should be based on the URL
    // You can fetch this from an API, or use a switch statement
    let customTitle = "xG: Free products for the AI race.";
    let customDescription = "xGamma is a project that aims to create open source applications for the AI age.";
    let customPreviewImage = "/src/assets/xgamma-icon.png"

    if (url.pathname.includes("article/google-auth-the-kmp-way")) {
        customTitle = "Google Sign-in: The KMP Way";
        customDescription = "This is a series of articles exploring a singular Kotlin UI development project. The aim is to demonstrate integration of native libraries specific to iOS/Android while keepign the UI layer lightweight and cross-platform.";
        customPreviewImage = "/src/articles/GoogleAuthTheKmpWay/kmp_client.png"
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
        .on('meta[property="og:image"]', {
            element(element) {
                element.setAttribute("href", customPreviewImage);
            },
        })
        .transform(response);
}