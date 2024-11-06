import payloadData from "./data/payload.json";

export const initialNodes = payloadData.map((item) => ({
  id: item.id.toString(),
  type: item.type,
  data: {
    label: item.name || item.data?.type,
    description: item.data?.type || "",
    timezone: item.data?.timezone || "",
    payload: item.data?.payload || [],
    comment: item.data?.comment || "",
  },
  position: { x: Math.random() * 400, y: Math.random() * 400 },
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
