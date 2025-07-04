const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function useNavigation() {
  return {
    navItems,
  };
}
