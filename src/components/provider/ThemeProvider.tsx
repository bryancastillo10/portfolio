import { useAppSelector } from "@/lib/redux/hooks";

const ThemeProvider = ({children}: {children:React.ReactNode}) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
	<main className={`${isDarkMode ? "bg-background text-accent-light": 
		"bg-foreground text-accent-dark"}
		min-h-screen transition-colors duration-500 ease-in-out
		`}>
	  {children}
	</main>
  )
}

export default ThemeProvider;
