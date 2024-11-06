import payloadData from "./data/payload.json";

export const initialNodes = payloadData.map((item) => ({
  id: item.id.toString(),
  type: item.type,
  data: { label: item.name || item.data?.type },
  position: { x: Math.random() * 400, y: Math.random() * 400 }, // Adjust positioning as needed
}));

export const initialEdges = payloadData
  .filter((item) => item.parentId && item.parentId !== -1)
  .map((item) => ({
    id: `e${item.parentId}-${item.id}`,
    source: item.parentId.toString(),
    target: item.id.toString(),
    type: "default",
    label: item.name || "Edge",
  }));
