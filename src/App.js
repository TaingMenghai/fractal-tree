import './App.css'
import FractalTree from './FractalTree.js'

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<h1>Fractal Tree 🌳</h1>
				{<FractalTree></FractalTree>}
				<p>
					A fractal tree is a type of geometric shape that has a self-similar
					structure. This means that each branch of the tree is a smaller copy
					of the whole tree, and this pattern repeats infinitely. A fractal tree
					can be created by starting with a line segment and adding two smaller
					line segments at an angle to each end. Then, the same process is
					repeated for each new line segment, and so on. The result is a
					beautiful and complex pattern that resembles a natural tree.
				</p>
			</div>
		</div>
	)
}

export default App
