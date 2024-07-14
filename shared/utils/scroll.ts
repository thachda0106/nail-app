export const scrollToTopPage = () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
};

export const scrollToElementById = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.scrollIntoView({ block: "start", behavior: "smooth" })
};
