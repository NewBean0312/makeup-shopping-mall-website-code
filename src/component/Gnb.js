import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/contact") {
    activeItem = "contact";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  }

  // 버튼 클릭 시, 원하는 링크로 이동하기
  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "contact") {
      router.push("/contact");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact");
        }}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
    </Menu>
  );
}
