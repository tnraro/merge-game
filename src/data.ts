interface Item {
  id: string;
  category: string;
  name: string;
  next?: string;
  use?: { type: "produce", table: { itemId: string, weight: number }[] }
}

export const data = new Map<string, Item>([
  ["🌱", { id: "🌱", category: "tree", name: "새싹", next: "🌿" }],
  ["🌿", { id: "🌿", category: "tree", name: "잎사귀", next: "🌲" }],
  ["🌲", {
    id: "🌲", category: "tree", name: "작은 나무", next: "🌳", use: {
      type: "produce", table: [
        { itemId: "🍎", weight: 2 },
        { itemId: "🍊", weight: 1 },
      ]
    }
  }],
  ["🌳", {
    id: "🌳", category: "tree", name: "큰 나무", next: undefined, use: {
      type: "produce", table: [
        { itemId: "🍎", weight: 60 },
        { itemId: "🍊", weight: 30 },
        { itemId: "🌼", weight: 10 },
        { itemId: "🥕", weight: 5 },
        { itemId: "🌱", weight: 1 },
      ]
    }
  }],
  ["🍎", { id: "🍎", category: "fruit", name: "사과", next: "🍊" }],
  ["🍊", { id: "🍊", category: "fruit", name: "어륀지", next: "🍌" }],
  ["🍌", { id: "🍌", category: "fruit", name: "바나나", next: "🍉" }],
  ["🍉", { id: "🍉", category: "fruit", name: "수박", next: "🍇" }],
  ["🍇", { id: "🍇", category: "fruit", name: "포도", next: "🍓" }],
  ["🍓", { id: "🍓", category: "fruit", name: "딸기", next: "🍐" }],
  ["🍐", { id: "🍐", category: "fruit", name: "배", next: "🍑" }],
  ["🍑", { id: "🍑", category: "fruit", name: "복숭아", next: "🍋" }],
  ["🍋", { id: "🍋", category: "fruit", name: "레몬", next: "🍏" }],
  ["🍏", { id: "🍏", category: "fruit", name: "청사과", next: "🍈" }],
  ["🍈", { id: "🍈", category: "fruit", name: "멜론", next: "🍒" }],
  ["🍒", { id: "🍒", category: "fruit", name: "체리", next: "🥭" }],
  ["🥭", { id: "🥭", category: "fruit", name: "망고", next: "🍍" }],
  ["🍍", { id: "🍍", category: "fruit", name: "파인애플", next: "🥥" }],
  ["🥥", { id: "🥥", category: "fruit", name: "코코넛", next: "🥝" }],
  ["🥝", { id: "🥝", category: "fruit", name: "키위", next: undefined }],

  ["🌼", { id: "🌼", category: "flower", name: "데이지", next: "🌺" }],
  ["🌺", { id: "🌺", category: "flower", name: "히비스커스", next: "🌸" }],
  ["🌸", { id: "🌸", category: "flower", name: "벚꽃", next: "🌷" }],
  ["🌷", { id: "🌷", category: "flower", name: "튤립", next: "🌹" }],
  ["🌹", { id: "🌹", category: "flower", name: "장미", next: "🌻" }],
  ["🌻", { id: "🌻", category: "flower", name: "해바라기", next: undefined }],

  ["🥕", { id: "🥕", category: "vegetable", name: "당근", next: "🥔" }],
  ["🥔", { id: "🥔", category: "vegetable", name: "감자", next: "🍅" }],
  ["🍅", { id: "🍅", category: "vegetable", name: "토마토", next: "🌽" }],
  ["🌽", { id: "🌽", category: "vegetable", name: "옥수수", next: "🍆" }],
  ["🍆", { id: "🍆", category: "vegetable", name: "가지", next: "🫑" }],
  ["🫑", { id: "🫑", category: "vegetable", name: "피망", next: "🥦" }],
  ["🥦", { id: "🥦", category: "vegetable", name: "브로콜리", next: "🥑" }],
  ["🥑", { id: "🥑", category: "vegetable", name: "아보카도", next: undefined }],
])