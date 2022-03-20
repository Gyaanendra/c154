AFRAME.registerComponent("target_ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //to add unique id
      var id = `ring${i}`;
      // to assign random position(x y z)
      var posx = Math.random() * 3000 + -1000;
      var posy = Math.random() * 2 + -1;
      var posz = Math.random() * 3000 + -1000;
      // assign x y z
      var position = {
        x: posx,
        y: posy,
        z: posz,
      };
    }
    this.create_rings(id, position);
  },

  create_rings: function (id, position) {
    var terrain = document.querySelector("#terrain");
    var ring = document.createElement("a-entity");
    ring.setAttribute("id", id);
    ring.setAttribute("position", position);
    ring.setAttribute("material", "color", "#FE0000");
    ring.setAttribute("geometry", { primitive: "torus", radius: 8 });
    terrain.appendChild(ring);
  },
});
