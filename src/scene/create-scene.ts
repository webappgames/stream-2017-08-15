import * as BABYLON from 'babylonjs';

export default function createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -2, -1), scene);
    light.position = new BABYLON.Vector3(20, 3, 20);

    const groundMesh = BABYLON.Mesh.CreateGround("ground", 10000, 10000, 2, scene);
    groundMesh.position.y = -0.5;

    BABYLON.Mesh.CreateBox("box",1,scene);

    return scene;
}