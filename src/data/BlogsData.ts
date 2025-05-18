import blog1img from "../assets/blog-images/blog1.png";
import blog2img from "../assets/blog-images/blog2.png";
import blog3img from "../assets/blog-images/blog3.png";

export interface BlogData {
  title: string;
  image: string;
  link: string;
}

export const blogData: BlogData[] = [
  {
    title:
      "Simplifying Progressive Web App (PWA) Development with Vite: A Beginner's Guide",
    image: blog3img,
    link: "https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf",
  },
  {
    title: "Choosing the best approach: React Router vs. Conditional Rendering",
    image: blog1img,
    link: "https://dev.to/hamdankhan364/choosing-the-best-approach-react-router-vs-conditional-rendering-for-multi-step-forms-3pp",
  },
  {
    title:
      "Simplifying State Management with Zustand: A Redux and Context API Alternative",
    image: blog2img,
    link: "https://dev.to/hamdankhan364/simplifying-state-management-with-zustand-a-redux-and-context-api-alternative-1o45",
  },
];
