import { createClient } from "@libsql/client/web";

/**
 * @param {Request} req
 * @param {import("@netlify/functions").Context} context
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
    const client = createClient({
        url: Netlify.env.get("TURSO_DATABASE_URL"),
        authToken: Netlify.env.get("TURSO_AUTH_TOKEN"),
    });

    return new Response(JSON.stringify(await client.execute("SELECT 1+1")));
};

export const config = {
    path: "/",
};