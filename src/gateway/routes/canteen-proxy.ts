export const canteenProxy = async ({ request }: { request: Request }) => {
    const origin = process.env.CANTEEN_URL!;
    const url = new URL(request.url);

    const path = url.pathname.replace(/^\/api\/canteens/, "");
    const target = origin+path+url.search;

    const method = request.method.toUpperCase();
    const hasBody = !["GET", "HEAD"].includes(method);

    const headers = new Headers(request.headers);

    headers.delete("host");
    headers.delete("connection");
    headers.delete("content-length");
    headers.delete("accept-encoding");
    headers.delete("postman-token");

    const options: RequestInit = {
        method,
        headers,
        ...(hasBody ? { body: request.body } : {})
    };

    return fetch(target, options);
}