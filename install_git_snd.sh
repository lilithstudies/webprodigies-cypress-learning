#!/bin/bash
# Create or overwrite the snd_git script
cat << 'EOF' > /usr/bin/snd_git
#!/bin/bash
git add .
echo "file?"
read f
git commit -m "$f"
git push
EOF

# Change permissions to make it executable
chmod +x /usr/bin/snd_git

