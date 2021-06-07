export const handle = async (event) => {

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Hope to see you soon! It was very nice to see you here :)"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };
};