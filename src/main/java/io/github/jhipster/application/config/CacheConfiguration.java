package io.github.jhipster.application.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache("users", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Region.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Region.class.getName() + ".countries", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocMajor.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocMajor.class.getName() + ".socminors", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Country.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Country.class.getName() + ".locations", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocMinor.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocMinor.class.getName() + ".socbroads", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocBroad.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocBroad.class.getName() + ".socspecifics", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocSpecific.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.SocSpecific.class.getName() + ".employees", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Skills.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Location.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Location.class.getName() + ".departments", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Department.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Department.class.getName() + ".employees", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Task.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Task.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Employee.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Employee.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Job.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Job.class.getName() + ".tasks", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.JobHistory.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Discipline.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Discipline.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Discipline.class.getName() + ".employees", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Discipline.class.getName() + ".programs", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Program.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Program.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Program.class.getName() + ".courses", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Program.class.getName() + ".disciplines", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Course.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Course.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Course.class.getName() + ".lessons", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Course.class.getName() + ".programs", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Lesson.class.getName(), jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Lesson.class.getName() + ".resources", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Lesson.class.getName() + ".courses", jcacheConfiguration);
            cm.createCache(io.github.jhipster.application.domain.Resource.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
