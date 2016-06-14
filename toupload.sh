#! /bin/bash
for f in `find img/photography img/model img/shibari/performance img/shibari/photos -name '*.jpg' | sed 's/^img\// /'`; do
  echo $f;
  [ "$(grep -R $f . --include \*.md | head -n 1)" ] && echo $f >> toupload;
done
