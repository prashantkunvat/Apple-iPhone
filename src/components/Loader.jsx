import { Html } from "@react-three/drei";

const Loader = () => {
	return (
		<Html>
			<div class="flex items-center justify-center">
				<div class="w-16 h-16 border-b-2 border-white rounded-full animate-spin"></div>
			</div>
		</Html>
	);
};

export default Loader;
