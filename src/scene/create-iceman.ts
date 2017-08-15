import * as BABYLON from 'babylonjs';

export default function createIceman(scene: BABYLON.Scene,level=3): BABYLON.Mesh {

    if(level<1){
        throw new Error(`level should be grater than 1`);
    }else
    if(level!==Math.floor(level)){
        throw new Error(`level should be integer`);
    }


    const material = new BABYLON.StandardMaterial("icemanmaterail", scene);
    material.diffuseColor = BABYLON.Color3.FromHexString('#dafffc');


    let groundBallMesh = BABYLON.Mesh.CreateSphere("sphere1", 16, 1, scene);
    groundBallMesh.material = material;
    const groundMesh = groundBallMesh;

    for(let i=0;i<level-1;i++){

        const radius = 1-((i+1)*0.2);
        const groundBallMeshNew = BABYLON.Mesh.CreateSphere(`sphere${i+2}`, 16, radius, scene);
        groundBallMeshNew.parent = groundBallMesh;
        groundBallMeshNew.material = material;
        groundBallMeshNew.position.y = radius;

        groundBallMesh = groundBallMeshNew;
    }

    return groundMesh;
}