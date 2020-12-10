// Always add .hero from styles.module.css
const classes = classnames('hero', 'hero-lg', 'mb-3', styles.hero)

// Only add the .hero class when some condition is true
const classes = classnames('hero', 'hero-lg', 'mb-3', {
  [styles.hero]: conditional
})