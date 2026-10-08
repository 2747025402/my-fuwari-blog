import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

/**
 * 网站基本设置
 */
export const siteConfig: SiteConfig = {
	title: "我的个人博客",
	subtitle: "分享生活 · 技术 · 资源",
	lang: "zh_CN",

	/**
	 * 主题颜色
	 * 200 = 青蓝色
	 */
	themeColor: {
		hue: 200,
		fixed: false,
	},

	/**
	 * 首页 Banner
	 * 暂时关闭，后面可以换成自己的图片
	 */
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",

		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},

	/**
	 * 文章目录
	 */
	toc: {
		enable: true,
		depth: 2,
	},

	/**
	 * 网站图标
	 * 后面可以换成你自己的头像 / Logo
	 */
	favicon: [],
};


/**
 * 顶部导航
 */
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/2747025402/my-fuwari-blog",
			external: true,
		},
	],
};


/**
 * 左侧个人资料
 */
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",

	name: "我的个人博客",

	bio: "记录生活，分享技术，收藏美好。",

	/**
	 * 社交链接
	 * 暂时关闭 Twitter / Steam 等默认链接
	 */
	links: [],
};


/**
 * 文章版权许可
 * 暂时关闭，避免首页显示默认 CC BY-NC-SA 信息
 */
export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};


/**
 * 代码块样式
 */
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
