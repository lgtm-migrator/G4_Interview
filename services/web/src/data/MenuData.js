import { isUrl } from "../utils/utils";

export const menuData = [
  {
    name: "User profile",
    icon: "user",
    path: "userinfo",
    children: [
      {
        name: "Main Page",
        path: "main"
      }
    ]
  },
  {
    name: "RESTful",
    icon: "api",
    path: "restful",
    children: [
      {
        name: "Main Page",
        path: "main"
      }
    ]
  },
  {
    name: "ETL",
    icon: "database",
    path: "ETL",
    children: [
      {
        name: "Main Page",
        path: "main"
      }
    ]
  },
  {
    name: "JS Challenge",
    icon: "code",
    path: "JS",
    children: [
      {
        name: "Search Page",
        path: "search"
      }
    ]
  }
];

function formatter(data, parentPath = "", parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
