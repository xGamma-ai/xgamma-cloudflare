import { CodeBlock, ImageHelper } from "../utils/helpers";
import style from "../common.module.css"
import kmp1 from "./kmp_client.png"
import kmp2 from "./Screenshot 2026-01-02 at 20.22.48.png"
const GoogleAuthTheKmpWay = () => {
    return <article className={style.article}>
        <h1>Google Sign-in: The KMP Way (Part 1)</h1>
        <p className={style.publishedOn}>Published: Friday, January 2, 2026</p>
        <br />
        <p>This is a series of articles exploring a singular Kotlin UI development project. The aim is to demonstrate integration of native libraries specific to iOS/Android while keepign the UI layer lightweight and cross-platform.</p>
        <br />
        <p>Final result:</p>
        <ImageHelper imageString={kmp2} />
        <br />
        <p>This article explores integration of login via Credential bottom sheet UI and manual click of the login with google button for native android in a shared UI KMP app.</p>
        <br />
        <h3>KMP Archietecture</h3>
        <ImageHelper imageString={kmp1} />
        <p>Refer to <a href="https://github.com/xGamma-ai/project-dino">Project Dino code</a> for understanding of the archiecture. Basically, the UI layer of the application is shared between iOS and Android (composeApp module), with shared module acting as the common ground for business logic between UI and backend server, while Ktor-based server rests in the server module.</p>
        <br />
        <h3>Sign in with Google problem</h3>
        <details>
            <summary className={style.summaryref}>
                Read article references:
            </summary>
            <a href="https://developer.android.com/identity/sign-in/credential-manager-siwg">Authenticate users with Sign in with Google</a>
        </details>
        <br />
        <p>For long integrating Google auth cross-platform had been cumbersome due to lack of a unified library or methodology to do so. Also the problem of how do you integrate passkeys, password based logins with existing Google auth solutions?</p>
        <p>For android native, this problem has been largely resolved by Google credentials library. Though for KMP apps there exists <a href="https://github.com/mirzemehdi/KMPAuth">KMPAuth</a> library which sets up up Gauth for both iOS and android, but buried under layers of native libraries. This hides a ton of implementation details of the auth, which this article explores in depth.</p>
        <br />
        <h3>KMP to native split</h3>
        <p>Since we are trying to split the login methods to native iOS/Android implementation while using unified kotlin UI, we will split our login Composable across native modules with expect/actual.</p>
        <CodeBlock code={
            `
composeApp/commonMain

@Composable
expect fun ClickableContinueWithGoogle(nonce: String): Unit

Box(Modifier.align(Alignment.Center)){
    Column {
        Text(
            "Project Dino*",
            fontSize = 20.sp,
            color = Color.White,
            fontFamily = FontFamily.Monospace
        )
        Spacer(Modifier.height(5.dp))
        Column {
            Text(
                "continue with",
                color = Color.White,
                fontSize = 12.sp
            )
            ClickableContinueWithGoogle(nonce)
        }
    }
}
            `
        } />
        <p>Above ClickableContinueWithGoogle is an clickable image, which would trigger the manual google with login.</p>
        <p>Crendential manager bottom sheet UI needs to be triggered when the user navigates to a specific composable. This can be achieved with LaunchedEffect and GetGoogleIdOption builder.</p>
        <p>check if the user has any accounts that have previously been used to sign in to your app by calling the API with the setFilterByAuthorizedAccounts parameter set to true.</p>
        <p>Nonce is a safe-guard between client-server to prevent token misuse. This topic is worth an article for itself.</p>
        <br />
        <p>Once the googleIdOption instance is ready to be created, we make the call inside LaunchedEffect:</p>
        <CodeBlock code={
            `
LaunchedEffect(nonce) {
    //auto login flow
    val request: GetCredentialRequest = GetCredentialRequest.Builder()
        .addCredentialOption(googleIdOption)
        .build()
    
    try {
        val result = credentialManager.getCredential(
            request = request,
            context = context
        )
        Log.i(TAG, "Triggered Google Sign in success")
        handleSignIn(result)
    } catch (e: GetCredentialException) {
        Log.e(TAG, "Error getting credential", e)
    }
}
                    `
        } />
        <p>Further checking the flow of the handleSignIn() function</p>
        <CodeBlock code={
            `
fun handleSignIn(credsRequest: GetCredentialResponse) {
    val credsType = credsRequest.credential
    when (credsType) {
        is CustomCredential -> {
            if (credsType.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL) {
                try {
                    val googleIdTokenCredential = GoogleIdTokenCredential.createFrom(credsType.data)
                    Log.d(TAG, googleIdTokenCredential.idToken)
                } catch (e: GoogleIdTokenParsingException) {
                    Log.e(TAG, "Error parsing Google ID token", e)
                }
            }
        }
        else -> {
            println("Unknown credential type")
        }
    }
}
                    `
        } />
    </article>;
};

export default GoogleAuthTheKmpWay;