rm -rf hexo
git clone https://github.com/661111/hexo-buterfly.git hexo
cd hexo
npm install
npx hexo clean
npx hexo g
npx gulp
npx hexo d
