function delay() {
    return new Promise((res => {
        setTimeout(res, Math.random() * 800)
    }))
}
export async function getData() {
    await delay
    return [
        { id: 2321, name: "Dan", height: "180", weight: "80", old: 28 },
        { id: 445, name: "Tony", height: "170", weight: "70", old: 28 }
    ]
}