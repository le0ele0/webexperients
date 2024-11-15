           function search() {
            var result = content.innerHTML;
            var keyword = document.getElementById("keyword").value;

            if (keyword === "") {
                alert("请输入关键词");
                return;
            }

            // 使用正则表达式替换所有匹配的关键词
            var highlightedResult = result.replace(new RegExp(keyword, 'gi'), match => `<span style='background:yellow;'>${match}</span>`);

            content.innerHTML = highlightedResult;
        }

        function clearSearch() {
            var content = document.getElementById("content");
            content.innerHTML = content.textContent;
        }