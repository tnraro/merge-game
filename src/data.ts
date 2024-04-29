interface Item {
  id: string;
  category: string;
  description?: string;
  name: string;
  next?: string;
  price?: number;
  use?: { type: "produce", table: { itemId: string, weight: number }[] } | {
    type: "money",
    value: number,
  }
}

export const data = new Map<string, Item>([
  ["🌱", { id: "🌱", category: "tree", name: "새싹", next: "🌿" }],
  ["🌿", { id: "🌿", category: "tree", name: "잎사귀", next: "🪴" }],
  ["🪴", {
    id: "🪴", category: "tree", name: "분재", next: "🌲", use: {
      type: "produce", table: [
        { itemId: "🍎", weight: 4 },
        { itemId: "🍊", weight: 2 },
        { itemId: "🌱", weight: 1 },
      ]
    }
  }],
  ["🌲", {
    id: "🌲", category: "tree", name: "작은 나무", next: "🌳", use: {
      type: "produce", table: [
        { itemId: "🍎", weight: 1 },
        { itemId: "🍊", weight: 2 },
        { itemId: "🍌", weight: 4 },
        { itemId: "🌱", weight: 1 },
      ]
    }
  }],
  ["🌳", {
    id: "🌳", category: "tree", name: "큰 나무", next: undefined, use: {
      type: "produce", table: [
        { itemId: "🍎", weight: 1 },
        { itemId: "🍊", weight: 1 },
        { itemId: "🍏", weight: 8 },
        { itemId: "🍋", weight: 4 },
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
  ["🍑", { id: "🍑", category: "fruit", name: "복숭아", next: "🍏" }],
  ["🍏", { id: "🍏", category: "fruit", name: "청사과", next: "🍋" }],
  ["🍋", { id: "🍋", category: "fruit", name: "레몬", next: "🍈" }],
  ["🍈", { id: "🍈", category: "fruit", name: "멜론", next: "🍒" }],
  ["🍒", { id: "🍒", category: "fruit", name: "체리", next: "🥭" }],
  ["🥭", { id: "🥭", category: "fruit", name: "망고", next: "🍍" }],
  ["🍍", { id: "🍍", category: "fruit", name: "파인애플", next: "🥥" }],
  ["🥥", { id: "🥥", category: "fruit", name: "코코넛", next: "🥝" }],
  ["🥝", {
    id: "🥝", category: "fruit", name: "키위", next: "🪙", use: {
      type: "produce",
      table: [
        { itemId: "🥭", weight: 8 },
        { itemId: "🍍", weight: 4 },
        { itemId: "🥥", weight: 2 },
        { itemId: "🛞", weight: 1 },
      ]
    }
  }],

  ["🛞", { id: "🛞", category: "vehicle", name: "바퀴", next: "🛴" }],
  ["🛴", { id: "🛴", category: "vehicle", name: "킥보드", next: "🚜" }],
  ["🚜", {
    id: "🚜", category: "vehicle", name: "트랙터", next: "🚂", use: {
      type: "produce",
      table: [
        { itemId: "🥕", weight: 3 },
        { itemId: "🥔", weight: 1 },
      ]
    }
  }],
  ["🚂", {
    id: "🚂", category: "vehicle", name: "칙칙폭폭", next: undefined, use: {
      type: "produce",
      table: [
        { itemId: "🥕", weight: 1 },
        { itemId: "🥔", weight: 1 },
        { itemId: "🍅", weight: 2 },
      ]
    }
  }],

  ["🥕", { id: "🥕", category: "vegetable", name: "당근", next: "🥔" }],
  ["🥔", { id: "🥔", category: "vegetable", name: "감자", next: "🍅" }],
  ["🍅", { id: "🍅", category: "vegetable", name: "토마토", next: "🌽" }],
  ["🌽", { id: "🌽", category: "vegetable", name: "옥수수", next: "🍆" }],
  ["🍆", { id: "🍆", category: "vegetable", name: "가지", next: "🫑" }],
  ["🫑", { id: "🫑", category: "vegetable", name: "피망", next: "🥦" }],
  ["🥦", { id: "🥦", category: "vegetable", name: "브로콜리", next: "🥑" }],
  ["🥑", {
    id: "🥑", category: "vegetable", name: "아보카도", next: "🪙", use: {
      type: "produce",
      table: [
        { itemId: "🥕", weight: 1 },
        { itemId: "🥔", weight: 1 },
        { itemId: "🍅", weight: 8 },
        { itemId: "🌽", weight: 4 },
        { itemId: "🌼", weight: 1 },
      ]
    }
  }],

  ["🌼", { id: "🌼", category: "flower", name: "데이지", price: 1, next: "🌺" }],
  ["🌺", { id: "🌺", category: "flower", name: "히비스커스", price: 1, next: "🌸" }],
  ["🌸", { id: "🌸", category: "flower", name: "벚꽃", price: 1, next: "🌷" }],
  ["🌷", { id: "🌷", category: "flower", name: "튤립", price: 1, next: "🌹" }],
  ["🌹", { id: "🌹", category: "flower", name: "장미", price: 1, next: "🌻" }],
  ["🌻", {
    id: "🌻", category: "flower", name: "해바라기", next: "💰", use: {
      type: "produce",
      table: [
        { itemId: "🌼", weight: 1 },
        { itemId: "🌺", weight: 2 },
        { itemId: "🌸", weight: 3 },
        { itemId: "🌷", weight: 1 },
      ]
    }
  }],

  ["🪙", {
    id: "🪙", category: "money", name: "동전", next: "💰", use: {
      type: "money",
      value: 1,
    }
  }],
  ["💰", {
    id: "💰", category: "money", name: "돈주머니", next: "💸", use: {
      type: "money",
      value: 3,
    }
  }],
  ["💸", {
    id: "💸", category: "money", name: "짱 많은 현금", next: "💳", use: {
      type: "money",
      value: 10,
    }
  }],
  ["💳", {
    id: "💳", category: "money", name: "신용카드", next: undefined, use: {
      type: "money",
      value: 53,
    }
  }],
])
