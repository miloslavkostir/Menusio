const paragraph = document.getElementsByTagName("p");
const text = ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin in tellus sit amet nibh dignissim sagittis. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. In enim a arcu imperdiet malesuada. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aenean vel massa quis mauris vehicula lacinia. Mauris dictum facilisis augue. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Proin mattis lacinia justo. Donec quis nibh at felis congue commodo. Etiam quis quam. Fusce aliquam vestibulum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].textContent = (text);
    console.log(paragraph[i]);

}