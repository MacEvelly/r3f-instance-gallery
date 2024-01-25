import { context } from ".";
import { Text, Bounds, useBounds, useCursor } from "@react-three/drei";
import { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion-3d";

const rows = 15;
const offSet = 5.5;

const SelectToZoom = ({ children }) => {
  const api = useBounds();
  const ZoomTo = (e) => {
    e.stopPropagation();
    console.log(e.object.name);
    e.delta <= 2 && api.refresh(e.object).fit();
 
  };
  const Deselect = (e) => {
    e.button === 0 && api.refresh().fit();
  };
  return (
    <group onClick={ZoomTo} onPointerMissed={Deselect}>
      {children}
    </group>
  );
};

const ZoomItem = ({ Model, name, ...props }) => {
  const [hovered, set] = useState();
  useCursor(hovered);

  return (
    <motion.group {...props} animate={{ scale: hovered ? 1.2 : 1 }}>
      <Model
        onPointerOver={(e) => {
          e.stopPropagation();
          set(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          set(false);
        }}
        visible={false}
      />
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        scale={0.35}
        position-y={-1}
      >
        {name}
      </Text>
    </motion.group>
  );
};

export const ShowAll = (props: JSX.IntrinsicElements["group"]) => {
  //const ALL = useInstances();
  const instances = useContext(context);
  const Keys = Object.keys(instances);

  const AllInstances = useMemo(
    () =>
      Keys.map((key, i) => {
        const X = (i % rows) * offSet;
        const Y = Math.floor(i / rows) * offSet;
        const Model = instances[key];
        return (
          <ZoomItem
            Model={instances[key]}
            name={key}
            key={key}
            position={[X, Y, 0]}
          />
        );
      }),
    [instances]
  );

  return (
    <group {...props}>
      <Bounds fit clip observe margin={3}>
        <SelectToZoom>{AllInstances}</SelectToZoom>
      </Bounds>
    </group>
  );
};
