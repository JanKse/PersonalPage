export const bgColorList = ['bg-pink-100 text-pink-800','bg-fuchsia-100 text-fuchsia-800','bg-purple-100 text-purple-800','bg-indigo-100 text-indigo-800','bg-blue-100 text-blue-800','bg-sky-100 text-sky-800','bg-emerald-100 text-emerald-800','bg-green-100 text-green-800','bg-yellow-100 text-yellow-800','bg-orange-100 text-orange-800','bg-red-100 text-amber-800', 'bg-red-100 text-amber-800', 'bg-teal-100 text-teal-800', 'bg-lime-100 text-lime-800', 'bg-cyan-100 text-cyan-800', 'bg-rose-100 text-rose-800']

export function getRandomItem(List){
    return List[Math.floor((Math.random()*List.length))]
}