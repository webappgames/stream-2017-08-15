import * as BABYLON from 'babylonjs';
import createIceman from './create-iceman';

export default function createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(1,1,1,0);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -2, -1), scene);
    light.position = new BABYLON.Vector3(20, 3, 20);

    const groundMesh = BABYLON.Mesh.CreateGround("ground", 10000, 10000, 2, scene);
    groundMesh.position.y = -0.5;



    let meshes:BABYLON.Mesh[]=[];


    for(let i=0;i<10;i++){

        let mesh:BABYLON.Mesh;

        if(Math.random()>0.5){
            mesh = createIceman(scene,Math.floor(Math.random()*10)+1);
        }else{
            mesh = BABYLON.Mesh.CreateBox("box",1,scene);

            const material = new BABYLON.StandardMaterial("icemanmaterail", scene);
            material.diffuseTexture = new BABYLON.Texture("/assets/textures/square-200-eleph.png", scene);
            material.diffuseTexture.hasAlpha = true;
            material.backFaceCulling = false;

            mesh.material=material;
        }

        mesh.position.x = (Math.random()-0.5)*10;
        mesh.position.z = (Math.random()-0.5)*10;
        mesh.position.y = 0.0001;
        mesh.rotation.y = Math.random()*Math.PI*2;

        meshes.push(mesh);
    }

    const startTime = (new Date()).getTime();

    function update(){

        const nowtTime = (new Date()).getTime();
        const duration = nowtTime - startTime;

        meshes.forEach((mesh)=>{
            mesh.rotation.y = Math.PI * 2 * (1/1000) * duration;
        });

        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);



    return scene;
}