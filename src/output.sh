#!/bin/bash

# 出力ファイル名
output_file="output.md"

# 出力ファイルを初期化
echo "" > $output_file

# 指定されたディレクトリ内のすべてのファイルを再帰的に検索
find . -type f ! -name "$(basename $0)" ! -name "$output_file" | while read file; do
  # ファイル名を出力ファイルに追加
  printf "\`${file}\`\n" >> $output_file
  printf '```\n' >> $output_file
  # ファイルの内容を出力ファイルに追加
  cat "$file" >> $output_file
  printf '\n```\n\n' >> $output_file
done
