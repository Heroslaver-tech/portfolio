import { Environment } from "@react-three/drei";

const Environments = () => {
  return (
    <>
      <Environment
        files="/assets/environments/moonless_golf_2k.hdr"
        background={true}
      />
    </>
  );
};
export default Environments;
