<<<<<<< HEAD
const config = {
  siteTitle: "Primo Solutions", // Site title.
  siteTitleShort: "Primo", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Build Blazing Fast Website", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://myprimosolutions.com", // Domain of your website without pathPrefix.
  pathPrefix: "/index", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Specializes in building blazing fast website for businesses.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Keng Sheng Lee", // Username to display in the author segment.
  userEmail: "ks@myprimosolutions.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kuala Lumpur, Malaysia", // User location to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://facebook.com/myprimosolutions",
      iconClassName: "fa fa-facebook",
    },
    {
      label: "Phone",
      url: "tel:+60179603926",
      iconClassName: "fa fa-phone",
    },
    {
      label: "Email",
      url: "mailto:info@myprimosolutions.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2019. Primo Solutions", // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
=======
const config = {
  siteTitle: "Primo Solutions", // Site title.
  siteTitleShort: "Primo", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Build Blazing Fast Website", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://myprimosolutions.com", // Domain of your website without pathPrefix.
  pathPrefix: "/index", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Keng Sheng Lee", // Username to display in the author segment.
  userEmail: "ks@myprimosolutions.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kuala Lumpur, Malaysia", // User location to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://facebook.com/myprimosolutions",
      iconClassName: "fa fa-facebook",
    },
    {
      label: "Phone",
      url: "tel:+60179603926",
      iconClassName: "fa fa-phone",
    },
    {
      label: "Email",
      url: "mailto:info@myprimosolutions.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2019. Primo Solutions", // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
>>>>>>> 30df615767adaef0d9586833df76ac3a9cd25511
