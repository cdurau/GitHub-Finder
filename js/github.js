class Github {
  constructor() {
    this.client_id = '4f71db91f86f015c0caa';
    this.client_secret = 'c621f1542489f2e151563d0fb08b8fb98b1e034b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    // profile = profile: const profile
    return {
      profile,
      repos
    };
  }
}
