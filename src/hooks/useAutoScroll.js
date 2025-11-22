export default function useAutoScroll(dependencies) {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, dependencies);

  return ref;
}
