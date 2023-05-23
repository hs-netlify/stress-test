const fireRequest = async () => {
    try {
        const response = await fetch('https://main--grand-faloodeh-09a237.netlify.app/timeout', {
            method: 'GET',
        });

        if (!response.ok) {
            return {
                ok: false,
                error: response.statusText,
            }
        }

        return {
            ok: true,
            data: await response.text(),
        };
    } catch (e) {
        return {
            ok: false,
            error: e,
        }
    }
}

const run = async (amountOfRequests) => {
    await Promise.all(Array(amountOfRequests).fill(0).map(() => fireRequest()));
}

(async () => {
    const response = await run(100);

    console.log(response);
})()
