const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 8080,
        historyApiFallback: {
            index: "/template.html",  // ✅ Serve template.html as the default file
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "template.html", // ✅ Generated file in dist
        }),
        new HtmlWebpackPlugin({
            template: "./src/menu.html",
            filename: "menu.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
