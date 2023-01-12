import { useStore } from "../hooks/useStore"

export const Menu = () => {
	const [saveWorld, resetWorld, howPlay] = useStore((state) => [state.saveWorld, state.resetWorld, state.howPlay])

	return (
    <div className="menu absolute">
			<button onClick={() => {
				howPlay()
			}}>
				How to play
			</button>
		  <button onClick={() => {
        saveWorld()
        window.location.reload()
      }}
		  >Save World</button>
		  <button
		  	onClick={() => resetWorld()}
		  >Reset</button>
	  </div>
  )
}