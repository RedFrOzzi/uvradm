export class ReturnObject {
  date: string;
  header: string;
  link: string;

  constructor(date: string, header: string, link: string) {
    this.date = date;
    this.header = header;
    this.link = link;
  }
}

const Parse = (str: string): ReturnObject[] => {
  const pareser = new DOMParser();
  const doc = pareser.parseFromString(str, "text/html");

  const listElements = doc
    .getElementsByClassName("newsList")
    .item(0)
    ?.getElementsByTagName("li");
  const newsObjects: ReturnObject[] = [];

  if (!listElements) {
    console.log("Parser error");
    return [];
  }

  for (let i = 0; i < listElements.length; i++) {
    const _link = listElements[i].getElementsByTagName("a").item(0);

    newsObjects.push(
      new ReturnObject(
        listElements[i].getElementsByTagName("b").item(0)
          ?.textContent as string,
        _link?.textContent as string,
        (_link?.href as string).replace(
          "http://localhost:5173",
          "https://g58.tmbreg.ru"
        )
      )
    );
  }

  return newsObjects;
};

export default Parse;
