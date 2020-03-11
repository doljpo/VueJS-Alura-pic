import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
        let current = 0;
        let incremento = 90;
        let efeito;

        el.addEventListener('dblclick', function () {
            incremento = binding.value || 90;

            if (!binding.arg || binding.arg == 'rotate') {
                if (binding.modifiers.reverse) {
                    current -= incremento;
                } else {
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if (binding.arg == 'scale') {
                efeito = `scale(${incremento})`;
            }

            if (binding.modifiers.animate) {
                this.style.transition = 'transform 0.5s';
            }

            this.style.transform = efeito;
        });
    }

});