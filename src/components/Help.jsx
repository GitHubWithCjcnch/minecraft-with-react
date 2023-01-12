import logo from '../assets/react-minecraft-logo.png'

export const Help = () => {
  return (
    <div className="absolute-centered help-container flex-centered">
        <div className="flex-centered">
          <span className="help-title">Minecraft Demo With</span>
          <img src={ logo } alt="react with minecraft logo" />
        </div>
        <div className="help-info">
          <p>
            Hi guys, I'm Caio Vitor and this is an application made with React and Threejs.
            It's just a mini clone of minecraft, you can build some things with 5 blocks: <br />
            <br />- Dirt
            <br />- Grass
            <br />- Wood
            <br />- Log
            <br />- Glass <br />
      
            <br /> How to play it:<br />
            <br />W, A, S, D - movement<br />
            Space - Jump<br />
            Place the block - Left Click Mouse<br />
            Break the block - Shift + Left Click Mouse<br />
            Select the blocks with 1 to 5 <br />
            To use your mouse to choose the options, press 'Esc'
      
            <br />Thanks to play and enjoy! :)
          </p>
        </div>
        <button onClick={() => {
          document.querySelector('.help-container').classList.add('display-none');
        }}>Done</button>
    </div>
  )  
}

