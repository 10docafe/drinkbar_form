/*
type Type =
    | "audio"
    | "template"
    | "video"
    | "image"
    | "text"
    | "flex"
    | "location"
    | "sticker"
    | "undefined";
const type: Type = "flex";
const bubble: 'bubble' = "bubble";
*/

export const content = {
  type: "text",
  text: "",
  size: "xs",
  gravity: "top",
  weight: "regular",
};

export const flexMsg = {
  type: "flex",
  altText: "ドリンクバー注文",
  contents: {
    type: "bubble",
    header: {
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "text",
          text: "ご注文内容",
          size: "sm",
          weight: "bold",
          color: "#AAAAAA",
        },
        {
          type: "separator",
        },
      ],
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "md",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "ドリンクメニュー",
              size: "sm",
              weight: "bold",
              gravity: "top",
            },
          ],
        },
      ],
    },
  },
};
