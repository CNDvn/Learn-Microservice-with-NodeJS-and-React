import buildClient from "../api/build-client";

const LandingPage = ({ currentUser = null }) => {
    return currentUser ? <h1>You are sign in</h1> : <h1>You are NOT sign in</h1>
}

LandingPage.getInitialProps = async context => {
    try {
        const client = buildClient(context)
        const { data } = await client.get("/api/users/currentuser")
        return data
    } catch (err) {
        console.log(err);
        return { currentUser: null }
    }
}

export default LandingPage