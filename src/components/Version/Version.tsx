import packageJson from "../../../package.json";

const Version: React.VFC = () => {
	const { version } = packageJson;
	const commit = version.substring(version.lastIndexOf("-") + 1);
	const url = `https://github.com/nishidemasami/study-react/commit/${commit}`;
	return (
		<>
			<p>バージョン情報：{version}</p>
			<p>
				該当のコミット：
				<a href={url}>{url}</a>
			</p>
		</>
	);
};

export default Version;
