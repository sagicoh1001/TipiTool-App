export async function getAllDocuments() {

    const response = await fetch('/api/getAllDocuments');
    return await response.json();
}
