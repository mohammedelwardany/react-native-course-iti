import { clint } from "./clint";

export async function getAllRepos(pagenumber = 1, date = "2020-01-01") {
    try {
        const response = await clint.get("/search/repositories", {

            params: {
                q: `created:>${date}`,
                sort: 'stars',
                order: 'desc',
                page: pagenumber,
            }

        })
        if (response) {
            console.log(date);
            return response.data.items;
        } else {
            return [];
        }
    } catch (e) {
        alert("err");
    }
}