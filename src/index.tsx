import './index.css';
import * as BABYLON from 'babylonjs';
import createScene from './scene/create-scene';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const canvas = document.getElementById("scene") as any;

const engine = new BABYLON.Engine(canvas, true);
const scene = createScene(canvas, engine);

engine.runRenderLoop(function () {
    scene.render();
});
window.addEventListener("resize", function () {
    engine.resize();
});