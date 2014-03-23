# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # the base box
  #
  config.vm.box = "ubuntu13.04-cloud-image"
  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/raring/current/raring-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.synced_folder "app/", "/vagrant/app"

  config.vm.network "forwarded_port", guest: 80, host: 9999
end