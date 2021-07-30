import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js';

function createOrbitControls ( camera, domElement) {
    const orbitControls = new OrbitControls(camera, domElement);
    orbitControls.damping = 0.2;

    // orbitControls.addEventListener( 'change', render );

    return orbitControls;
}

export { createOrbitControls };