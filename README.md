[codepen linki](https://codepen.io/by-Meftunca/pen/QQdWyz)

## Collapse kullanımı
Başlamadan önce collapse hakkında bilmeniz gereken iki öznitelik var,
- Tetikleyici kimliğini tanıtmanız için `data-href` ve `class="collapse-toggle"`
- Collapse yapısı için `data-id` ve `class="collapse-content"`
bu iki öznitelik collapse yapınızın çalışmasını sağlayacak.

```html
 <a href="#!" data-collapse="default" data-href="d3" class="collapse-toggle">collapse</a>
 <div class="collapse-content" data-id="d1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eum iure nisi? A, adipisci aliquid animi,
     aspernatur atque cumque earum esse eum ex fugit, id in odit pariatur repellendus totam!
 </div>
 <script> 
  collapsible(); // bu kullanım ile default olarak collapse yapısını kullanabilirsiniz
</script> 
```

## Accordion Kullanımı

Aşağıda accordion menu yapısını bulabilirsiniz...

```html
<ul class="collapse-group"> //popout özelliği için `collapse-group popout` olarak özelleştirin
    <li class="collapse-item"><a href="#!" class="collapse-toggle">collapse toggle 1</a>
        <div class="collapse-content">1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam debitis
            dignissimos expedita id incidunt, mollitia non nulla omnis optio placeat, quisquam ratione recusandae
            similique sint sit suscipit totam!
        </div>
    </li>
    <li class="collapse-item"><a href="#!" class="collapse-toggle">collapse toggle 2</a>
        <div class="collapse-content">2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda dicta
            dolores eaque error laborum, odio odit quas sapiente sequi tempore voluptate voluptatibus? Alias explicabo
            fugit ipsam quas voluptates? Sapiente.
        </div>
    </li>
    <li class="collapse-item"><a href="#!" class="collapse-toggle">collapse toggle 3</a>
        <div class="collapse-content">3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores debitis
            dolore est facilis fuga inventore, pariatur quasi sapiente sunt vel veniam voluptas voluptate! Aut eum
            minima quis rerum veniam?
        </div>
    </li>
    <li class="collapse-item"><a href="#!" class="collapse-toggle">collapse toggle 4</a>
        <div class="collapse-content">4Lorem lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            asperiores, at dolor in minus mollitia obcaecati placeat provident quisquam reiciendis tempora tempore
            tenetur, velit. Amet iure nisi nulla! Debitis, natus.
        </div>
    </li>
</ul>
<script>
    collapsible ("",
        {
            accordion: true || false,
            expandable: true || false,
            activeClass: "collapse-content-light", //content için aktif class atayabilirsiniz
            delay : 500
        }
        );
</script>
```
