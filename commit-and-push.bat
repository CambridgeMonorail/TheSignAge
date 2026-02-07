@echo off
cd /d "c:\Projects\TheSignAge"
git add -A
git commit -m "fix(client): use React Router navigate for landing page CTA" -m "The 'View Examples' button was using HeroSection's link prop which triggers window.location.href navigation, bypassing React Router and breaking HashRouter functionality." -m "Changed to onClick handler with navigate('/gallery') to properly use React Router's hash-based navigation." -m "Also added demo site screenshots to docs/images/"
git push origin main
pause
